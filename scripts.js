// Toggle between Light and Dark mode
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("night-mode");
    const currentMode = document.body.classList.contains("night-mode") ? "🌙" : "☀️";
    document.getElementById("theme-toggle").textContent = currentMode;
});

// Table Sorting function
function sortTable(columnIndex, tableId) {
    const table = document.getElementById(tableId);
    const rows = Array.from(table.rows).slice(1); // Exclude header row
    const isNumericColumn = columnIndex === 2 || columnIndex === 3 || columnIndex === 4 || columnIndex === 5; // AUM, APR, Fees, Inflows are numeric

    // Sorting logic for numbers and strings
    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();

        if (isNumericColumn) {
            const numA = parseFloat(cellA.replace(/[^\d.-]/g, ''));
            const numB = parseFloat(cellB.replace(/[^\d.-]/g, ''));
            return numA - numB;
        } else {
            return cellA.localeCompare(cellB);
        }
    });

    // Reorder rows based on sorted data
    rows.forEach(row => table.appendChild(row));
}
