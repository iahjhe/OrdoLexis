
        // Simple animation for sidebar icons
        document.querySelectorAll('.sidebar-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                document.querySelectorAll('.sidebar-icon').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // Simulate chart data loading
        setTimeout(() => {
            const chartLine = document.querySelector('.chart-line');
            if(chartLine) {
                chartLine.style.strokeDashoffset = '0';
            }
        }, 500);
        
        // Calendar day click handler
        document.querySelectorAll('.calendar-day:not(.other-month)').forEach(day => {
            day.addEventListener('click', function() {
                alert('Selected day: ' + this.textContent + ' June 2023');
            });
        });


// In your script.js file or within a <script> tag
document.addEventListener('DOMContentLoaded', function() {
    // Sample case data (in a real app, this would come from your database)
    const cases = {
        'LC-2023-001': {
            title: 'Smith & Co. Corporate Matter',
            type: 'Corporate',
            status: 'Active',
            priority: 'High',
            client: 'Smith & Co.',
            contact: 'John Smith (CEO)',
            phone: '(555) 123-4567',
            email: 'john.smith@smithco.com',
            opened: 'Jan 15, 2023',
            nextHearing: 'Jun 15, 2023',
            lastUpdated: 'May 30, 2023',
            assignedTo: 'John Doe',
            paralegal: 'Jane Smith',
            description: 'Corporate dispute regarding shareholder rights and board governance. The client alleges breach of fiduciary duty by the current board members. Seeking injunctive relief and damages.',
            activities: [
                { date: 'Jun 1, 2023', text: 'Motion for Summary Judgment filed' },
                { date: 'May 25, 2023', text: 'Client meeting to discuss strategy' },
                { date: 'May 15, 2023', text: 'Discovery responses submitted' }
            ]
        },
        'LC-2023-002': {
            title: 'Johnson Divorce Proceedings',
            type: 'Family',
            status: 'Pending',
            priority: 'Normal',
            client: 'Johnson, Mary',
            contact: 'Mary Johnson',
            phone: '(555) 234-5678',
            email: 'mary.johnson@email.com',
            opened: 'Feb 3, 2023',
            nextHearing: 'Jun 18, 2023',
            lastUpdated: 'May 28, 2023',
            assignedTo: 'Jane Smith',
            paralegal: 'Michael Brown',
            description: 'Divorce proceedings with child custody and asset division components. Client seeking primary custody of two minor children and equitable distribution of marital assets.',
            activities: [
                { date: 'May 28, 2023', text: 'Submitted financial disclosures' },
                { date: 'May 15, 2023', text: 'Mediation session conducted' },
                { date: 'Apr 30, 2023', text: 'Temporary custody order issued' }
            ]
        },
        'LC-2023-003': {
            title: 'Williams Criminal Defense',
            type: 'Criminal',
            status: 'Urgent',
            priority: 'Urgent',
            client: 'Williams, David',
            contact: 'David Williams',
            phone: '(555) 345-6789',
            email: 'd.williams@email.com',
            opened: 'Mar 10, 2023',
            nextHearing: 'Jun 10, 2023',
            lastUpdated: 'May 29, 2023',
            assignedTo: 'John Doe',
            paralegal: 'Sarah Johnson',
            description: 'Criminal defense case for charges of embezzlement. Client maintains innocence and claims accounting errors. Preparing for preliminary hearing.',
            activities: [
                { date: 'May 29, 2023', text: 'Filed motion to suppress evidence' },
                { date: 'May 20, 2023', text: 'Interviewed key witness' },
                { date: 'May 5, 2023', text: 'Received discovery materials from prosecution' }
            ]
        },
        'LC-2023-004': {
            title: 'Anderson Contract Dispute',
            type: 'Contract',
            status: 'Closed',
            priority: 'Normal',
            client: 'Anderson LLP',
            contact: 'Robert Anderson (General Counsel)',
            phone: '(555) 456-7890',
            email: 'legal@andersonllp.com',
            opened: 'Apr 5, 2023',
            nextHearing: 'N/A',
            lastUpdated: 'May 25, 2023',
            assignedTo: 'Michael Johnson',
            paralegal: 'Emily Davis',
            description: 'Breach of contract dispute with vendor. Case settled out of court with favorable terms for client. Finalizing settlement documentation.',
            activities: [
                { date: 'May 25, 2023', text: 'Final settlement agreement signed' },
                { date: 'May 20, 2023', text: 'Settlement reached in mediation' },
                { date: 'May 10, 2023', text: 'Mediation scheduled' }
            ]
        }
    };

    // Add click handlers to all View buttons
    document.querySelectorAll('.btn-outline-primary').forEach(button => {
        button.addEventListener('click', function() {
            // Get the case number from the table row
            const caseNumber = this.closest('tr').querySelector('td:first-child').textContent;
            
            // Get the case data
            const caseData = cases[caseNumber];
            
            // Update the modal with case data
            document.getElementById('modalCaseNumber').textContent = caseNumber;
            document.getElementById('modalCaseTitle').textContent = caseData.title;
            document.getElementById('modalCaseType').textContent = caseData.type;
            
            // Update status badge
            const statusBadge = document.getElementById('modalCaseStatus');
            statusBadge.textContent = caseData.status;
            statusBadge.className = 'badge ' + (
                caseData.status === 'Active' ? 'bg-primary' :
                caseData.status === 'Pending' ? 'bg-warning' :
                caseData.status === 'Urgent' ? 'bg-danger' :
                'bg-success'
            );
            
            // Update other fields
            document.getElementById('modalCasePriority').textContent = caseData.priority;
            document.getElementById('modalClientName').textContent = caseData.client;
            document.getElementById('modalClientContact').textContent = caseData.contact;
            document.getElementById('modalClientPhone').textContent = caseData.phone;
            document.getElementById('modalClientEmail').textContent = caseData.email;
            document.getElementById('modalCaseOpened').textContent = caseData.opened;
            document.getElementById('modalNextHearing').textContent = caseData.nextHearing;
            document.getElementById('modalLastUpdated').textContent = caseData.lastUpdated;
            document.getElementById('modalAssignedTo').textContent = caseData.assignedTo;
            document.getElementById('modalParalegal').textContent = caseData.paralegal;
            document.getElementById('modalCaseDescription').innerHTML = `<p>${caseData.description}</p>`;
            
            // Update timeline
            const timeline = document.querySelector('.timeline');
            timeline.innerHTML = caseData.activities.map(activity => `
                <div class="timeline-item">
                    <div class="timeline-point"></div>
                    <div class="timeline-content">
                        <small class="text-muted">${activity.date}</small>
                        <p>${activity.text}</p>
                    </div>
                </div>
            `).join('');
            
            // Show the modal
            const modal = new bootstrap.Modal(document.getElementById('caseDetailsModal'));
            modal.show();
        });
    });
});