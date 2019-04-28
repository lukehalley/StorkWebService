# Full clean slate build of the Stork system
build:
	# Delete all containers.
	docker rm -f $(docker ps -a -q)
	# Delete all images.
	docker rmi -f $(docker images -q)
	# Build the Stork system.
	docker-compose build 
	docker-compose up --force-recreate

# Rebuild the system to apply changes.
rebuild:
	# Build the Stork system.
	docker-compose build 
	docker-compose up --force-recreate

# Teardown the whole Stork system.
teardown:
	docker volume rm $(docker volume ls -qf dangling=true)
	docker volume ls -qf dangling=true | xargs -r docker volume rm