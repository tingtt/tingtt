.PHONY: tag
tag:
	cat .k8s/deploy.yml.template | \
		sed "s/TAG/${TAG}/g" | \
		tee .k8s/deploy.yml
	git add .k8s/deploy.yml
	git commit -m 'ci: ${TAG}' || true
	git tag ${TAG}