import Grupo from "../models/Grupo.js";

export const renderDashboard = async (req, res) => {
  const grupos = await Grupo.findAll({ where: { UserId: req.user.id } });
  res.render("admin/dashboard", {
    pageName: "dashboard",
    messages: req.flash(),
    grupos,
  });
};
