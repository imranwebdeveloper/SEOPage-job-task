import { PayloadAction } from "@reduxjs/toolkit";

export type TableSelectionType<T> = {
  selectedData: number[];
  data: T[] | null;
  isAllChecked: boolean;
};

export const makeTableSelectionActions = <T extends { id: number }>() => {
  return {
    toggleSelectItem: (
      state: TableSelectionType<T>,
      action: PayloadAction<number>
    ) => {
      const selectedId = action.payload;
      if (state.selectedData.includes(selectedId)) {
        state.selectedData = state.selectedData.filter(
          (id) => id !== selectedId
        );
      } else {
        state.selectedData = [...state.selectedData, selectedId];
      }
      if (state.selectedData.length === state.data?.length) {
        state.isAllChecked = true;
      }
    },

    toggleSelectAll: (state: TableSelectionType<T>) => {
      if (state.selectedData.length === state.data?.length) {
        state.selectedData = [];
        state.isAllChecked = false;
      } else {
        if (state.data) {
          state.selectedData = state.data.map((item) => item.id);
          state.isAllChecked = true;
        }
      }
    },
    unselectAll: (state: TableSelectionType<T>) => {
      state.selectedData = [];
      state.isAllChecked = false;
    },
  };
};
