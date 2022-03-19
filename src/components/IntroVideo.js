const IntroVideo = () => {
    return (
        <div className="video-wrapper text-align-center">
            <p className="large-heading">Great wine begins with great grapes</p>
            <div className="video-container d-flex flex-justify-center flex-align-center">
                <video className="video-grapes" autoPlay muted controls loop>
                    <source
                        src="https://res.cloudinary.com/clouduser/video/upload/vc_auto/v1647416644/mixkit-grapes-hanging-from-a-branch-close-up-34630-medium_e3rzzf.webm"
                        type="video/mp4"
                    />
                </video>
                <p className="video-desc">
                    Wine quality strongly depends on the grape quality. To obtain
                    high-quality wines, it is necessary to process healthy grapes at the
                    correct ripeness stage.
                </p>
            </div>
        </div>
    )
}

export default IntroVideo