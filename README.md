# JS Exercises Repository

This repository contains a collection of JavaScript exercises that help improve logical thinking and problem-solving skills. The exercises range from basic to advanced levels and are designed to challenge the user and provide a learning experience through coding practice.

## Table of Contents

- [Introduction](#introduction)
- [Exercises](#exercises)
  - [Simple Exercises](#simple-exercises)
  - [Intermediate Exercises](#intermediate-exercises)
  - [Advanced Exercises](#advanced-exercises)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository aims to provide a series of JavaScript exercises that can help developers, especially beginners and intermediate programmers, to practice and improve their problem-solving and logical thinking skills. The exercises are divided into categories based on difficulty and complexity, including:

- **Simple Exercises**: Basic tasks to get comfortable with JavaScript syntax and logic.
- **Intermediate Exercises**: Tasks that involve more complex problem-solving and algorithmic thinking.
- **Advanced Exercises**: Challenges that require higher-level understanding of JavaScript concepts and problem-solving skills.

## Exercises

### Simple Exercises

- **Print a message**: Write a function that takes a message as input and prints it to the console.
- **Sum of Two Numbers**: Write a function that takes two numbers as input and returns their sum.
- **Even or Odd**: Write a program that takes a number as input and determines if it is even or odd.
- **Celsius to Fahrenheit Conversion**: Write a function that converts Celsius temperature to Fahrenheit.
- **Reverse a String**: Write a program that reverses an input string.

### Intermediate Exercises

- **Factorial**: Write a recursive function to calculate the factorial of a given number.
- **Prime Number Check**: Write a program to check if a given number is prime.
- **Sum of Array Elements**: Write a function that returns the sum of all elements in an array.
- **Character Count**: Write a function that counts the occurrences of a specific character in a string.
- **Fibonacci Sequence**: Write a program to print a specific number of Fibonacci numbers.

### Advanced Exercises

- **Sum of Digits**: Write a function to find the sum of the digits of a given number.
- **Palindrome Check**: Write a function to check if a number is a palindrome.
- **Array Search**: Write a function to search for a target number in an array.
- **Generate Combinations**: Write a function that generates all combinations of a given set of numbers.
- **Calculate Average**: Write a function to calculate the average of an array of numbers.

## Contributing

We encourage others to contribute by adding new exercises, improving existing ones, or suggesting optimizations. To contribute, please follow these steps:

1. Fork this repository.
2. Clone your fork to your local machine.
3. Create a new branch (`git checkout -b feature-name`).
4. Make your changes and commit them (`git commit -am 'Add new exercise'`).
5. Push to your forked repository (`git push origin feature-name`).
6. Open a pull request to merge your changes into the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## THE amd64

# Please Review Solved Exercises

Please review the solved exercises and provide your feedback for writing cleaner and more efficient code.

#

this is some git commands use to switch and work with branch

```bash

git checkout -b refactor-branch
git branch -a
git add .
git commit -m " Refactor : calculator problem "
git checkout main
git checkout refactor-branch
git push -u origin refactor-branch
```

# How to send " Pull Request " to your Friend's Repository 

## 1. Add the Other Person's Repository as a Remote

If you haven't already added the other person's repository as a remote, you need to do that first.

1. First, if you don't have your project on your system, clone it. 

```bash

git clone https://github.com/your-username/your-fork.git
cd your-fork
```

2. Add the other person's repository as a remote:

```bash

git remote add other-person https://github.com/other-person/their-fork.git
```

for example in our case we can do 

```bash

git remote add maede https://github.com/maedemajnoon/javascript-exercises.git
```

3. using below command we can very all remotes 

```bash

git remote -v
```

You should see something like this:

```
maede   https://github.com/maedemajnoon/javascript-exercises.git (fetch)
maede   https://github.com/maedemajnoon/javascript-exercises.git (push)
origin  https://github.com/amirdadipoor/javascript-exercises.git (fetch)
origin  https://github.com/amirdadipoor/javascript-exercises.git (push)
upstream        https://github.com/Hesammousavi/javascript-exercises.git (fetch)
upstream        https://github.com/Hesammousavi/javascript-exercises.git (push)
```

## 2. Switch Between Remotes

To work with different remotes, you can use the git fetch, git checkout, and git push commands.

1. Fetch branches from the other person's remote:

```bash 

git fetch other-person

```

2. Checkout a branch from the other person's repository:


```bash

git checkout -b new-branch-name other-person/branch-name
```

for example : 

```bash

git checkout -b amd-refactors maede/refactor
```

This creates a new branch in your local repository based on the branch from the other person's fork.

3.Make changes and commit them:

- Make your changes to the files.
- Stage the changes:
  ``` bash
  
  git add .
  ```

- Show Stage & chages & chages added to your stage 
  ```bash 
  git stage 
  git diff 
  git diff --staged
  ```

- Commit the changes:
  ```bash
  
  git commit -m "Your commit message"
  ``` 
  
4. Push the changes to the other person's repository:

  *you dont have access apply your changes in your friend's repository*
  
- If you have write access to their repository, you can push directly:
  ```bash
  
  git push other-person new-branch-name
  ```
- If you don't have write access, you'll need to push to your own fork and create a pull request (see the previous explanation).

  ```bash 
  git push your-remote(origin) new-branch-name
  ```
  
## 3. Switch Back to Your Fork

To switch back to working with your own fork:

1. Fetch branches from your remote ( if u dont fetch your remote )  :

```bash

git fetch origin
```

2. Checkout a branch from your repository:

```bash

git checkout your-branch-name
```

3.Push changes to your fork:

```bash

git push origin your-branch-name
```


## 4 . Send Pull Request 

To send pull-request to your friend's repository, follow the steps below:
- start  

![start](https://s6.uupload.ir/files/start_rhbk.png)

- finish

![finish](https://s6.uupload.ir/files/finish_isbp.png)

