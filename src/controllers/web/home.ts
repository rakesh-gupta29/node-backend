import { Request, Response } from "express";
class Home {
  public static indexView(req: Request, res: Response) {
    res.json({ message: "home  page" });
  }
  public static aboutView(req: Request, res: Response) {
    res.render("screens/about");
  }
}
export default Home;
