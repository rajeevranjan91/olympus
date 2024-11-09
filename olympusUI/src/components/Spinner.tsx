function Spinner() {
    return (
        <div className="flex flex-col items-center justify-center p-2">
        <div
        className="w-8  h-8  animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span></span>
        </div>
      </div>
      );
}

export default Spinner;