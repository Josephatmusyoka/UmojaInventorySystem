document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from the API
    fetch('/api/dashboard')
        .then(response => response.json())
        .then(data => {
            // Update dashboard metrics
            document.getElementById('totalSales').textContent = `$${data.totalSales.toFixed(2)}`;
            document.getElementById('totalUsers').textContent = data.totalUsers;
            document.getElementById('itemsInStock').textContent = data.itemsInStock;
            document.getElementById('pendingOrders').textContent = data.pendingOrders;

            // Example data for chart and activities
            const salesData = {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [{
                    label: 'Sales',
                    data: [1500, 2000, 1700, 2200, 1800], // Example sales data
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            };

            // Initialize the chart
            const ctx = document.getElementById('salesChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: salesData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Populate recent activity
            const activities = [
                'Order #1234 shipped',
                'New user registered: John Doe',
                'Item #5678 added to stock',
                'Pending order #4321 received'
            ];

            const activityList = document.getElementById('activityList');
            activities.forEach(activity => {
                const li = document.createElement('li');
                li.textContent = activity;
                activityList.appendChild(li);
            });

            // Populate notifications
            const notifications = [
                'Reminder: Update inventory data',
                'New software update available'
            ];

            const notificationList = document.getElementById('notificationList');
            notifications.forEach(notification => {
                const div = document.createElement('div');
                div.textContent = notification;
                notificationList.appendChild(div);
            });

            // Populate recent orders (sample data)
            const orders = [
                { id: '1001', customer: 'Jane Smith', status: 'Completed', date: '2024-09-01' },
                { id: '1002', customer: 'John Doe', status: 'Pending', date: '2024-09-02' }
            ];

            const orderList = document.getElementById('orderList');
            orders.forEach(order => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.customer}</td>
                    <td>${order.status}</td>
                    <td>${order.date}</td>
                `;
                orderList.appendChild(tr);
            });

            // Populate stock levels (sample data)
            const stockLevels = [
                { item: 'Widget A', quantity: 150 },
                { item: 'Widget B', quantity: 80 }
            ];

            const stockList = document.getElementById('stockList');
            stockLevels.forEach(stock => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${stock.item}</td>
                    <td>${stock.quantity}</td>
                `;
                stockList.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching dashboard data:', error));
});
