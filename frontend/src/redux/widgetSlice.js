import { createSlice } from '@reduxjs/toolkit';
import { dashboardData } from '../dashboardData';

const widgetSlice = createSlice({
    name: 'widgets',
    initialState: dashboardData,
    reducers: {
        addWidget: (state, action) => {
            const { categoryId, widget } = action.payload;
            const category = state.categories.find(cat => cat.id === categoryId);
            if (category) {
                category.widgets.push(widget);
            }
        },
        removeWidget: (state, action) => {
            const { categoryId, widgetId } = action.payload;
            const category = state.categories.find(cat => cat.id === categoryId);
            if (category) {
                category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
            }
        }
    }
});

export const { addWidget, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
