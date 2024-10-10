import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({onButtonClick}) => {
  const buttontext = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonContainer}>
        {buttontext.map((buttonName) => {
          return <button className={styles.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>;
        })}
      </div>
    </>
  );
};
export default ButtonContainer;
