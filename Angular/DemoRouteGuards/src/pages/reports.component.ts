import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-reports',
    imports: [CommonModule],
    template:`
        <div class="reports-container">
            <h1>Reports Dashboard</h1>
            <p>This page is protected by the <strong>CanMatch Guard</strong>.</p>
            <div class="report-card">
                <h3>Employee Report</h3>
                <p>Total Employees: 150</p>
            </div>
            <div class="report-card">
                <h3>Project Report</h3>
                <p>Active Projects: 12</p>
            </div>
            <div class="report-card">
                <h3>Revenue Report</h3>
                <p>Quarter Revenue: ₹25,00,000</p>
            </div>
        </div>
    `,
    styles: [`
                .reports-container {
                    max-width: 900px;
                    margin: 40px auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }
                h1 {
                    color: #1976d2;
                    margin-bottom: 20px;
                }
                .report-card {
                    padding: 15px;
                    margin-bottom: 15px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    background-color: #f8f9fa;
                }
                .report-card h3 {
                    margin-top: 0;
                    color: #333;
                }
        `]
})
export class ReportsComponent{

}