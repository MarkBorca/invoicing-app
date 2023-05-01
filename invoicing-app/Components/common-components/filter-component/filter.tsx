export default function Filter({
  filterTags,
  selectedFilterTag,
  setSelectedFilterTag,
}) {
  return (
    <div className=" flex flex-row">
      {filterTags.map((element, index) => {
        return (
          <p
            className={` px-8 h-8 text-md cursor-pointer ${
              selectedFilterTag === element
                ? "border-b-2 border-blue-400 text-blue-400 font-semibold"
                : "text-black font-normal"
            } `}
            onClick={() => setSelectedFilterTag(element)}
            key={index}
          >
            {element.charAt(0).toUpperCase() + element.slice(1)}
          </p>
        );
      })}
    </div>
  );
}
