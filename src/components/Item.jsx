const Item = ({name, semester}) => {
  return (
    <div className="flex flex-row items-center p-3 bg-base-100 border-b border-base-200">
      <div className="flex justify-center items-center w-10 h-10 rounded-full">
        <BsFilePdf />
      </div>
      <div className="ms-4">{ name }</div>
      <div className="ms-auto">
        <BsChevronRight/>
      </div>
    </div>
  );
}

export default Item;
