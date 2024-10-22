## 1. ```git init```
- creates a new Git respository in the current directory, which contains all the necessary metadata for the Git repo.

## 2. ```git status```
- gives information on the current status of a git repository and its contents.
- Staged Changes: Files that have been added to the staging area (using git add) and are ready to be committed.
- Modified Changes: Files that have been modified but are not yet staged for commit.
- Untracked Files: Files that are new and not yet added to the staging area.

## 3. ```git add```
- command is used to add changes from working directory to the staging area in Git.
- ```git add <filename>```
- ```git add .``` :- Add all modified and untracked files from current directory to the staging area, now ready for the commit.

## 4. ```git commit```
- command is used to save the changes to the local repository.
- commit all the staged changes.
- ```git commit -m "text message"``` :
-- Here -m flag allows us to pass an inline commit message.

## 5. ```git log```
- view the history of commits in git.