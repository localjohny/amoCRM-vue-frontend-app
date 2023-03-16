export default {
  main: [
    { title: "Название", dataIndex: "name", key: "name" },
    { title: "Статус", dataIndex: "status_id", key: "tags" },
    {
      title: "Ответственный",
      dataIndex: "responsible_user_id",
      key: "responsible_user_id",
    },
    {
      title: "Дата создания",
      dataIndex: "created_at",
      key: "created_at",
    },
    { title: "Бюджет", dataIndex: "price", key: "price" },
  ],
  inRow: [
    {
      title: "Имя/Название",
      dataIndex: "name",
      key: "name",
    },
    { title: "Телефон", dataIndex: "PHONE", key: "PHONE" },
    { title: "Электронная почта", dataIndex: "EMAIL", key: "EMAIL" },
  ],
};
