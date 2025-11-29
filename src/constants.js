export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  c: "10.2.0",
  cpp: "10.2.0",      
  go: "1.16.2",
  ruby: "3.0.1"
};


export const CODE_SNIPPET = {
    javascript: `console.log("Hello, World!");`,
    python: `print("Hello, World!")`,
    java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    c: `#include <stdio.h>
int main(){
    printf("Hello World!");
}`,
    cpp: `#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
    ruby: `puts "Hello, World!"`,
    go: `package main

import "fmt"
func main() {
    fmt.Println("Hello, World!") 
}`
}