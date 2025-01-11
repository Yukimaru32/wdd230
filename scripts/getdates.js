function displayLastModified() {
    // 最終更新日を取得
    const lastModified = document.lastModified;

    // 日付フォーマットの設定（例: YYYY/MM/DD HH:MM:SS）
    const date = new Date(lastModified);
    const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ` +
                          `${String(date.getHours()).padStart(2, '0')}:` +
                          `${String(date.getMinutes()).padStart(2, '0')}:` +
                          `${String(date.getSeconds()).padStart(2, '0')}`;

    // HTMLの要素に最終更新日を表示
    document.getElementById("lastModified").textContent = `Last Modified: ${formattedDate}`;
}

// 関数を実行
displayLastModified();