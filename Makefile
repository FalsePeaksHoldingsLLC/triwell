# 			 _       ____________        __________  ___    __  __________       ______  ____  __ __				   #
#			| |     / / ____/ __ )      / ____/ __ \/   |  /  |/  / ____/ |     / / __ \/ __ \/ //_/				   #
#			| | /| / / __/ / __  |_____/ /_  / /_/ / /| | / /|_/ / __/  | | /| / / / / / /_/ / ,<   				   #
#			| |/ |/ / /___/ /_/ /_____/ __/ / _, _/ ___ |/ /  / / /___  | |/ |/ / /_/ / _, _/ /| |  				   #
#			|__/|__/_____/_____/     /_/   /_/ |_/_/  |_/_/  /_/_____/  |__/|__/\____/_/ |_/_/ |_|  				   #

########################################################################################################################
#                                                  GLOBAL Parameters                                                   #
########################################################################################################################

SHELL:=/bin/bash
USER:=nagel
ACCOUNT:=w3.uvm.edu
BASE_WD:=/users/n/a/nagel/www-root/triwell/

##############################################   Project SETUP   #######################################################

Phony: setup
setup:
	mkdir -p bin
	mkdir -p content
	mkdir -p images
	mkdir -p js
	mkdir -p ng
	mkdir -p style
	mkdir -p site_build
	mkdir -p site_build/images
	touch site_build/.htaccess
	touch site_build/robot.txt
	touch site_build/sitemap.xml
	npm install


##############################################   Compress & Compile   ##################################################

Phony: compile
compile:
	gulp compile

Phony: compress
compress:
	gulp compress

Phony: build
build: compile compress


##############################################   Website Release   #####################################################

Phony: release
release: build
	ssh $(USER)@$(ACCOUNT) 'mkdir -p $(BASE_WD)../backup/'
	ssh $(USER)@$(ACCOUNT) 'rm -rf $(BASE_WD)../backup/*'
	ssh $(USER)@$(ACCOUNT) 'mv $(BASE_WD)* $(BASE_WD)../backup/'
	scp -P 22 -r docs/* $(USER)@$(ACCOUNT):$(BASE_WD)


##############################################   Website Restore   #####################################################

Phony: restore
restore: 
	ssh $(USER)@$(ACCOUNT) 'rm -rf $(BASE_WD)*'
	ssh $(USER)@$(ACCOUNT) 'mv $(BASE_WD)../backup/* $(BASE_WD)'