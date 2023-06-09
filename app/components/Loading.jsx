const Loading = () => {
    return (
        <div className="w-1/2 m-auto text-center h-96">
            <div className="font-bolder text-xl">
                Loading...
            </div>
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        </div>
    );
}

export default Loading;