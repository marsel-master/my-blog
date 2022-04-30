import React from "react";
import BlogEntry from "../BlogEntry/BlogEntry";

const BlogEntries = () => {
    return (
        <>
            <div className="w3-col l8 s12">
                <BlogEntry
                    imgUrl="https://habrastorage.org/r/w1560/getpro/habr/upload_files/760/c8f/f7a/760c8ff7ab4e88155efae8faeb46b689.png"
                    title="Переносы строк делать необязательно."
                    tags="И при использовании имени вполне уместно говорить «обратиться к свойству объекта». Это ведь объект (кошечка), и его свойства!"
                    data="10.04.2022"
                    desc="Второе определение объекта — неупорядоченное множество пар ключ:значение, заключенное в фигурные скобки {}.

Оно применимо тогда, когда внутри фигурных скобок приходит не конкретный целостный объект, а просто набор полей. Они могут быть связаны между собой, а могут относится к совершенно разным объектам внутри кода:"
                    countComents="5"
                />

            </div>
        </>
    )

}

export default BlogEntries;

