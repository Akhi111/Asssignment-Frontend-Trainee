import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Widget from "./Widget";
import { addWidget } from "../redux/widgetSlice.js";

const Dashboard = () => {
  const categories = useSelector((state) => state.widgets.categories);
  const dispatch = useDispatch();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddWidget = () => {
    if (selectedCategoryId && widgetName && widgetText) {
      const newWidget = {
        id: Date.now(),
        name: widgetName,
        text: widgetText,
        type: "text",
      };
      dispatch(
        addWidget({ categoryId: selectedCategoryId, widget: newWidget })
      );
      setWidgetName("");
      setWidgetText("");
    }
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search Widgets"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      {filteredCategories.map((category) => (
        <div key={category.id}>
          <h2 className="text-xl font-bold mb-4">{category.name}</h2>
          <div className="grid grid-cols-3 gap-4">
            {category.widgets.map((widget) => (
              <Widget
                key={widget.id}
                categoryId={category.id}
                widget={widget}
              />
            ))}
            <button
              onClick={() => setSelectedCategoryId(category.id)}
              className="p-4 bg-gray-100 rounded-lg border-dashed border-2 border-gray-300"
            >
              + Add Widget
            </button>
          </div>
        </div>
      ))}

      {selectedCategoryId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Add Widget</h3>
            <input
              type="text"
              placeholder="Widget Name"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Widget Text"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={handleAddWidget}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Confirm
            </button>
            <button
              onClick={() => setSelectedCategoryId(null)}
              className="w-full mt-2 bg-gray-500 text-white p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;