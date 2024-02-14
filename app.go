package main

import (
	"context"
	"fmt"
)

// App struct
type App struct {
	ctx   context.Context
	count int
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{count: 0}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) AddCount(count int) int {
	count += 1
	return count
}

func (a *App) Debug() {
	fmt.Println("Testi")
}
