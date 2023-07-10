.PHONY: tag
tag:
	cat .k8s/deploy.yml.template | \
		sed "s/TAG/${TAG}/g" | \
		tee .k8s/deploy.yml
	git add .k8s/deploy.yml
	git commit -m 'ci: ${TAG}' || true
	git tag ${TAG}

.PHONY: listcomponents
listcomponents:
	@find src/pages | grep '.tsx' | grep -v '_app' | sed 's/src\///g' | awk -F '/' '{print $$1 " " $$2}' | sort; \
		find src/templates | grep '.tsx' | sed 's/src\///g' | awk -F '/' '{print $$1 " " $$2}' | sort; \
		find src/organisms | grep '.tsx' | sed 's/src\///g' | awk -F '/' '{print $$1 " " $$2}' | sort; \
		find src/molecules | grep '.tsx' | sed 's/src\///g' | awk -F '/' '{print $$1 " " $$2}' | sort; \
		find src/atoms | grep '.tsx' | sed 's/src\///g' | awk -F '/' '{print $$1 " " $$2}' | sort

.PHONY: synccomponents
synccomponents:
	@make listcomponents | go run components.go > data/Inspector/index.ts

.PHONY: refactor_images
refactor_images:
	@cd public/ ; \
		for file in $$(find * | grep -E ".(png|jpg|jpeg)$$"); do \
			cwebp $${file} -o $${file%.*}.webp > /dev/null ; \
			cd ../ ; \
			find data -name '*.ts' -exec gsed -i "s@$${file}@$${file%.*}.webp@g" {} + ; \
			find data -name '*.tsx' -exec gsed -i "s@$${file}@$${file%.*}.webp@g" {} + ; \
			find src -name '*.ts' -exec gsed -i "s@$${file}@$${file%.*}.webp@g" {} + ; \
			find src -name '*.tsx' -exec gsed -i "s@$${file}@$${file%.*}.webp@g" {} + ; \
			cd public/ ; \
			rm $${file} ; \
			echo "Compress '$${file}' -> '$${file%.*}.webp'" ; \
		done