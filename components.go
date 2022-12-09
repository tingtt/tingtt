package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

const (
	constName string = "COMPONENTS"
	indent    string = "  "
)

func main() {
	stdin0, _ := ioutil.ReadAll(os.Stdin)
	stdin := string(stdin0)
	ss := strings.Split(stdin, "\n")

	typeFilePath := "../../domain/model/Inspector/@types"
	fmt.Printf(
		"import {\n%sATOMIC_LEVEL_ATOM,\n%sATOMIC_LEVEL_MOLECULE,\n%sATOMIC_LEVEL_ORGANISM,\n%sATOMIC_LEVEL_PAGE,\n%sATOMIC_LEVEL_TEMPLATE,\n%sComponent,\n} from '%s'\n\n",
		indent, indent, indent, indent, indent, indent, typeFilePath,
	)

	fmt.Printf("export const %s: Component[] = [\n", constName)
	for i := 0; i < len(ss); i++ {
		if ss[i] == "" {
			break
		}
		s2 := strings.Split(ss[i], " ")
		dir := s2[0]
		name := strings.TrimSuffix(s2[1], ".tsx")
		fmt.Printf("%s{\n", indent)
		fmt.Printf("%s%sname: '%s',\n", indent, indent, name)
		switch dir {
		case "pages":
			fmt.Printf("%s%slevel: %s,\n", indent, indent, "ATOMIC_LEVEL_PAGE")
		case "templates":
			fmt.Printf("%s%slevel: %s,\n", indent, indent, "ATOMIC_LEVEL_TEMPLATE")
		case "organisms":
			fmt.Printf("%s%slevel: %s,\n", indent, indent, "ATOMIC_LEVEL_ORGANISM")
		case "molecules":
			fmt.Printf("%s%slevel: %s,\n", indent, indent, "ATOMIC_LEVEL_MOLECULE")
		case "atoms":
			fmt.Printf("%s%slevel: %s,\n", indent, indent, "ATOMIC_LEVEL_ATOM")
		}
		suffix := ","
		if i == len(ss)-2 {
			suffix = ""
		}
		fmt.Printf("%s}%s\n", indent, suffix)
	}
	fmt.Println("]")
}
