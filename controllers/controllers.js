const movieModel = require("../models/movieSchema");

const home = async (req, res) => {
  try {
    let data = await movieModel.find({});
    return res.render("page", { data });
  } catch (error) {
    console.log(error);
    return false;
  }
};

const insertData = async (req, res) => {
  const { title, rating, date, description, image } = req.body;
  console.log({ title, rating, date, description, image });

  try {
    await movieModel.create({
      title,
      rating,
      date,
      description,
      image,
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
    return res.redirect('back')
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    await movieModel.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.redirect('back')
  }
};

const   edit = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let data = await movieModel.findById(id);
    console.log(data);
    res.render("editpage", { user: data });
  } catch (error) {
    console.log(error);
    return res.redirect('back')
  }
};

const updateData = async (req, res) => {
  console.log(req.body)
    const { title, rating, date, description, image, id} = req.body;
    try {
      await movieModel.findByIdAndUpdate(id, {
        title : title ,
        rating : rating,
        date: date,
        description : description,
        image : image
      });
    //   console.log(user)
      res.redirect('/');
    } catch (error) {
      console.error(error);
      return res.redirect('back')
    }
  };

module.exports = { home, insertData, deleteData, edit, updateData };
