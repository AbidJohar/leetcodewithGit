# LeetCode Solutions 🚀

This repository contains solutions to various LeetCode problems. The goal is to improve problem-solving skills, share approaches, and collaborate with others.

## 📌 How to Clone and Contribute

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/AbidJohar/leetcodewithGit.git
```

### 2️⃣ Navigate to the Repository  
```sh
cd leetcodewithGit
```

### 3️⃣ Create a New Branch and Switch to It  
```sh
git branch your-branch-name
git checkout your-branch-name
```

### 4️⃣ Add Your Solution  
- Navigate to the appropriate category (e.g., `array&hashing`).  
- Inside that folder, find the problem folder (e.g., `containDuplicate`).  
- Open the corresponding language file (`problem.js`, `problem.py`, `problem.cpp`) and write your solution.  
  - Example:
    - `containDuplicate/problem.js`
    - `containDuplicate/problem.py`
    - `containDuplicate/problem.cpp`

### 5️⃣ Sync with Latest Changes Before Pushing  
If other collaborators have made changes and pushed them, update your local repository before pushing:
```sh
git pull origin main
```

### 6️⃣ Commit and Push Your Code  
```sh
git add .
git commit -m "Added solution for <problem-name>"
git push origin your-branch-name
```

### 7️⃣ Merging Your Branch into Main  
Once your changes are reviewed and approved, you can merge them into the `main` branch:

1. **Switch to the `main` branch**  
   ```sh
   git checkout main
   ```

2. **Sync with the remote repository (ensure it's up to date)**  
   ```sh
   git pull origin main
   ```

3. **Merge your branch into `main`**  
   ```sh
   git merge your-branch-name
   ```

4. **Resolve any merge conflicts (if necessary), then commit the merge**  
   ```sh
   git add .
   git commit -m "Merged your-branch-name into main"
   ```

5. **Push the updated `main` branch to GitHub**  
   ```sh
   git push origin main
   ```

## 📂 Folder Structure  
```
leetcodewithGit/
│── array&hashing/
│   ├── containDuplicate/
│   │   ├── problem.js
│   │   ├── problem.py
│   │   ├── problem.cpp
│── README.md
```

## 💡 Contribution Guidelines  
✅ Write clean, well-commented code.  
✅ Use meaningful variable names.  
✅ Add a short explanation at the top of your solution file.  
✅ Ensure your code is correct before submitting a PR.  

Happy Coding! 🚀
