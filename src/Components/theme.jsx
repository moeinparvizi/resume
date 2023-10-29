function Theme({mainText,mainColor}) {
  return (
    <span // onClick={() => darkMode()}
      className={
        "theme-changer grid place-items-center text-["+mainColor+
        "] rounded-xl border p-3"
      }
    >
      {mainText}
    </span>
  );
}

export default Theme