package fr.pulsedev.jarvis;

import java.io.File;
import java.io.IOException;
import java.util.Objects;

public class Main {

    //Main Method
    public static void main(String... args){
        //Wait the window to shows up
        while (!Objects.requireNonNull(launchUI()).isAlive());

        System.out.println("Everything has started.");
    }

    //Function to launch the electron UI.
    public static Process launchUI() {
        try {
            //Get app directory
            File appDirectory = new File("src/main/app");

            //Start UI
            return new ProcessBuilder("npm" , "start")
                    .directory(appDirectory)
                    .start();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
