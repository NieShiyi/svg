import Table from "../../../components/Table";
import { ListData } from "../constants";
import "./index.css";

const List = ({ onSelect }) => {
  const columns = [
    { title: "知识点", dataIndex: "name" },
    { title: "描述", dataIndex: "desc" },
    { title: "案例", dataIndex: "demo" },
    { title: "文档地址", dataIndex: "doc" },
    {
      title: "操作",
      dataIndex: "operation",
      render: (_text, record) => (
        <button className="button" onClick={() => onSelect(record)}>
          查看
        </button>
      ),
    },
  ];
  return (
    <div>
      <h1 className="title">
        <a href="https://svg-tutorial.com/" target="_blank">
          CuteTutorials{" "}
        </a>
      </h1>
      <Table columns={columns} data={ListData} />
    </div>
  );
};

export default List;
