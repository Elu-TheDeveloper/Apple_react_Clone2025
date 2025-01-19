import { useEffect, useState } from 'react';

function Youtube() {
    const [youTubeVideos, setYoutubeVideos] = useState([]);

    useEffect(() => {
        fetch(
            "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyA16yfDNvWcX07KD8LBGuIUmUdxZouiIxQ"
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.items && Array.isArray(data.items)) {
                    setYoutubeVideos(data.items);
                } else {
                    console.error('Unexpected data format:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching YouTube videos:', error);
            });
    }, []);

    return (
        <section className='youtubeVideosWrapper'>
            <div className='allVideoWrapper'>
                <div className='container'>
                    <div className='row justify-content-center text-center'>
                        <div className="col-12">
                            <br />
                            <h1>Latest Videos</h1>
                            <br />
                        </div>
                    </div>

                    <div className='row'>
                        {youTubeVideos.length > 0 ? (
                            youTubeVideos.map((singleVideo, i) => {
                                const videoId = singleVideo.id.videoId;
                                const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

                                return (
                                    <div key={i} className='col-12 col-md-4'>
                                        <div className='videoWrapper'>
                                            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={singleVideo.snippet.thumbnails.medium.url}
                                                    alt={singleVideo.snippet.title}
                                                    className='img-fluid'
                                                />
                                                <h5>{singleVideo.snippet.title}</h5>
                                            </a>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-12 text-center">
                                <p>No videos available.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Youtube;
