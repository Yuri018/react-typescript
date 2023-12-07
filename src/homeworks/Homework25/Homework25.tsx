import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input";

import { Homework25Wrapper, Text, ProductData } from "./styles";
import Button from "components/Button";

function Homework25() {
  const schema = Yup.object().shape({
    title: Yup.string()
      .required("Поле обязателное")
      .min(2, "Минимальное колличество символов 2")
      .max(50, "Маскимальное количество символов 50"),

    price: Yup.number()
      .required("Поле обязателное")
      .max(15, "Маскимальное количество символов 15"),

    description: Yup.string().max(150, "Маскимальное количество символов 150"),

    conditions: Yup.boolean().default(true),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      price: undefined,
      description: "",
    },
    onSubmit: () => {},
  });

  return (
    <Homework25Wrapper>
      <ProductData onSubmit={formik.handleSubmit}>
        <Text>Форма для заполнения данных товара</Text>
        <Input 
        labelName="Название товара"
        error={formik.errors.title}
        value={formik.values.title}
        onChange={formik.handleChange}
        name="title"
        />
        <Input 
        labelName="Цена товара"
        error={formik.errors.price}
        value={formik.values.price}
        onChange={formik.handleChange}
        name="price"
        />
        <p>Описание товара</p>
        <textarea></textarea>
        <label><input type="checkbox" /> Правила использования</label>

        <Button name="Создать товар"/>
      </ProductData>
    </Homework25Wrapper>
  );
}

export default Homework25;
