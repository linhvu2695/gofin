package main

import (
	"backend/config"
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func init() {
	config.LoadEnv()
	config.ConnectDB()
}

func main() {
	r := gin.Default()

	routes.InitializeRoutes(r)

	r.Run()
}
