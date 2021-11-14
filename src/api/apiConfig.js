const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '858562499d43d781fa0db3b6a90062d9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;