import calsses from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={calsses.container}>
      <p className={calsses.title}>- CSS Modules -</p>
      <button className={calsses.button}>FIGHT!!</button>
    </div>
  );
};
