#!/bin/bash

# Define the project directory and zip file name
PROJECT_DIR="/Users/vwa0lw6/Documents/dev/ebi/frontend_projects/REACT/234268"
ZIP_FILE="project.zip"

# Navigate to the project directory
cd "$PROJECT_DIR" || exit

# Remove node_modules directory
rm -rf node_modules

# Create a zip file of the project
zip -r "$ZIP_FILE" .

echo "Project zipped successfully into $ZIP_FILE and node_modules removed."