package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func InitializeRoutes(r *gin.Engine) {
    r.GET("/ping", controllers.Ping)
}