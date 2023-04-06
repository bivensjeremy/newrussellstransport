const Video = () => {
    return (
        <div>
            <video 
                playsInline 
                autoPlay 
                loop 
                muted
                className="object-cover top-0 left-0 fixed z-[-1] h-screen w-full"
            >
                <source src="/videos/timeLapseCity.mp4" poster="/images/timelapseStillImage.png" type="video/mp4" />
            </video>
        </div>
    );
}

export default Video;