import { useState } from "react";

export function useSelection(initialItems) {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelectAll = () => {
    if (selectedItems.length === initialItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(initialItems.map((item) => item.id));
    }
  };

  const toggleSelectItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const unselectAll = () => {
    setSelectedItems([]);
  };

  return {
    selectedItems,
    toggleSelectAll,
    toggleSelectItem,
    unselectAll,
  };
}
