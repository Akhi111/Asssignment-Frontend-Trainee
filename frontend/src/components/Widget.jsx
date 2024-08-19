import { useDispatch } from "react-redux";
import { removeWidget } from "../redux/widgetSlice.js";
import { FaTimes } from "react-icons/fa";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";

const Widget = ({ categoryId, widget }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  const options = {
    plugins: {
      legend: {
        position: "right", // Positions the labels on the right side of the chart
      },
    },
    maintainAspectRatio: false, // Allow custom size by disabling aspect ratio maintenance
  };

  return (
    <div className="relative p-4 bg-white rounded-lg shadow-md">
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <FaTimes />
      </button>
      <h3 className="text-lg font-semibold">{widget.name}</h3>
      <p className="mt-2">{widget.text}</p>
      {/* {widget.type === "pieChart" && <Pie data={widget.data} options={options} />} */}

      {widget.type === "pieChart" && (
        <div className="w-120 h-120">
          {/* Adjust width and height as needed */}
          <Pie data={widget.data} options={options} />
        </div>
      )}

      {widget.type === "barChart" && (
        <div className="w-120 h-120">
          {/* Adjust width and height as needed */}
          <Bar data={widget.data} options={options} />
        </div>
      )}
      
    </div>
  );
};

export default Widget;
