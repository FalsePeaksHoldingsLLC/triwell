# Website Framework
This project is to streamline the setup of a website process utilizing build tools such as [MakeFile](https://www.gnu.org/software/make/manual/make.html) & [Gulp](https://gulpjs.com/). This project does require the installation of [npm](https://www.npmjs.com/)

## SETUP
The setup process creates the following folders
- content/      *# all html based files*
- images/       *# all images*
- ng/           *# all angular based files*
- js/           *# all other JavaScript based files*
- site_build/   *# the compiled website ready for release* 
```

The setup process creates the following files
```
- .htaccess     # apache alter configuration file
- robot.txt     # search engine optimization file
- sitemap.html  # search engine optimization file

To instantiate setup run the following command
```
make setup
```

## DEVELOPMENT
The following command compiles website and compresses images into *site_build/* directory
make build
```

The following command compiles website into *site_build/* directory ignoring images 
```
make compile
```

The following command compress out images into *site_build/* directory
```
make compress
```

## RELEASE
Make sure all variables are set in *GLOBAL PARAMETERS* section
```
make release
```
