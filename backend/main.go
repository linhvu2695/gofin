package main

import (
	"backend/config"
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	config.LoadEnv()

	r := gin.Default()

	routes.InitializeRoutes(r)

	r.Run()
}
