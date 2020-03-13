export const constants = Object.freeze({
    ALIBREATE : {
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
                    page : "",
                    limit : ""
                }
            },
            //Positions 
            POSITIONS : { 
                url : "https://api.alibrate.com/v1/rankings/positions",
                method : "GET",
                params : {
                    byScore : ""
                }
            },
            // Los que más reseñan
            TOP_REVIEWERS : { 
                url : "https://api.alibrate.com/v1/rankings/topReviewers",
                method : "GET",
                params : {
                    page : "",
                    limit : ""
                }
            },
            // Mejores reseñadores
            TOP_MORE_LIKES_IN_REVIEWS : { 
                url : "https://api.alibrate.com/v1/rankings/topMoreLikesInReviews",
                method : "GET",
                params : {
                    byScore : "",
                    limit : "",
                    page : ""
                }
            },
            // Libros más leídos
            TOP_BOOK_READED_IN_LIBRARIES : { 
                url : "https://api.alibrate.com/v1/rankings/topBookReadedInLibraries",
                method : "GET",
                params : {
                    limit : "",
                    page : ""
                }
            },
            //Lectores con más seguidores
            TOP_MORE_FOLLOWED : { 
                url : "https://api.alibrate.com/v1/rankings/topMoreFollowed",
                method : "GET",
                params : {
                    limit : "",
                    page : ""
                }
            },
            //Lectores con mejores citas
            TOP_MORE_LIKES_IN_QUOTES : { 
                url : "https://api.alibrate.com/v1/rankings/topMoreLikesInQuotes",
                method : "GET",
                params : {
                    byScore : "",
                    limit : "",
                    page : ""
                }
            },
            // Lectores con mejores listas
            TOP_MORE_LIKES_IN_LISTS : { 
                url : "https://api.alibrate.com/v1/rankings/topMoreLikesInLists",
                method : "GET",
                params : {
                    byScore : "",
                    limit : "",
                    page : ""
                }
            },
            //Lectores con mejores imágenes
            TOP_MORE_LIKES_IN_IMAGES : { 
                url : "https://api.alibrate.com/v1/rankings/topMoreLikesInImages",
                method : "GET",
                params : {
                    byScore : "",
                    limit : "",
                    page : ""
                }
            },
            //Lectores con mejores textos
            TOP_MORE_LIKES_IN_TEXTS : { 
                url : "https://api.alibrate.com/v1/rankings/topMoreLikesInTexts",
                method : "GET",
                params : {
                    byScore : "",
                    limit : "",
                    page : ""
                }
            },           
        }
    }
});