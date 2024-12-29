import { useState } from "react";

function ListGroup() {
    const [selectedIndex, setSelectedIndex] = useState(-1); // Изначально ни один элемент не выбран
    const items = ['Task 1', 'Task 2', 'Task 3']; // Список элементов

    const handleSelectItem = (item) => {
        console.log(item);
    };

    return (
        <>
            <h1>Tasks</h1> {/* Заголовок теперь жестко закодирован */}
            {items.length === 0 && <p> No items :( </p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? 'list-group-item active' // Применяется, если элемент выбран
                                : 'list-group-item' // Обычный стиль
                        }
                        key={item} // Убедитесь, что item уникален
                        onClick={() => {
                            setSelectedIndex(index); // Обновляем индекс выбранного элемента
                            handleSelectItem(item); // Вызываем функцию с выбранным элементом
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
