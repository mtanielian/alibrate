export const constants = Object.freeze({
    ALIBRATE : {
        CDN : "https://cdn.alibrate.com/",
        USER : {
            //WS - REST AUTH
            AUTH : "https://api.alibrate.com/v1/auth/local",
            //WS - REST PASSWORD
            REST_PASSWORD : "https://api.alibrate.com/v1/user/reset/resetPasswordRequest",
        },
        RANKINGS : {
            //Generos
            BOOKS_GENRES : { 
                url : "https://api.alibrate.com/v1/books/genres",
                method : "GET",
                params : {
                    page : "1",
                    limit : "100"
                }
            },
            //Positions 
            POSITIONS : { 
                url : "https://api.alibrate.com/v1/rankings/positions",
                method : "GET",
                params : {
                    byScore : "true"
                }
            },
            // Los que más reseñan
            TOP_REVIEWERS : { 
                classModal : "topReviewers",
                url : "https://api.alibrate.com/v1/rankings/topReviewers",
                method : "GET",
                params : {
                    page : "1",
                    limit : "3"
                }
            },
            // Mejores reseñadores
            TOP_MORE_LIKES_IN_REVIEWS : { 
                classModal : "topMoreLikesInReviews",
                url : "https://api.alibrate.com/v1/rankings/topMoreLikesInReviews",
                method : "GET",
                params : {
                    byScore : "true",
                    limit : "3",
                    page : "1"
                }
            },
            // Libros más leídos
            TOP_BOOK_READED_IN_LIBRARIES : { 
                classModal : "topBookReadedInLibraries",
                url : "https://api.alibrate.com/v1/rankings/topBookReadedInLibraries",
                method : "GET",
                params : {
                    limit : "3",
                    page : "1"
                }
            },
            //Lectores con más seguidores
            TOP_MORE_FOLLOWED : { 
                classModal : "topMoreFollowed",
                url : "https://api.alibrate.com/v1/rankings/topMoreFollowed",
                method : "GET",
                params : {
                    limit : "3",
                    page : "1"
                }
            },
            //Lectores con mejores citas
            TOP_MORE_LIKES_IN_QUOTES : { 
                classModal : "topMoreLikesInQuotes",
                url : "https://api.alibrate.com/v1/rankings/topMoreLikesInQuotes",
                method : "GET",
                params : {
                    byScore : "true",
                    limit : "3",
                    page : "1"
                }
            },
            // Lectores con mejores listas
            TOP_MORE_LIKES_IN_LISTS : { 
                classModal : "topMoreLikesInLists",
                url : "https://api.alibrate.com/v1/rankings/topMoreLikesInLists",
                method : "GET",
                params : {
                    byScore : "true",
                    limit : "3",
                    page : "1"
                }
            },
            //Lectores con mejores imágenes
            TOP_MORE_LIKES_IN_IMAGES : { 
                classModal : "topMoreLikesInImages",
                url : "https://api.alibrate.com/v1/rankings/topMoreLikesInImages",
                method : "GET",
                params : {
                    byScore : "true",
                    limit : "3",
                    page : "1"
                }
            },
            //Lectores con mejores textos
            TOP_MORE_LIKES_IN_TEXTS : { 
                classModal : "topMoreLikesInTexts",
                url : "https://api.alibrate.com/v1/rankings/topMoreLikesInTexts",
                method : "GET",
                params : {
                    byScore : "true",
                    limit : "3",
                    page : "1"
                }
            },           
        }
    }
});