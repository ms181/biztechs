import time
import pyautogui

# List of items separated by a line space
text = '''Managing doctors and their specilisations
Manage appointances and consultations
Manage outpatient
Invoicing and receipts
Consultation history reports
Offline and online appointments
Notifications to patients
Time management through token system

'''

# Split the text into a list of items
items = text.split('\n')

# Wait for a few seconds before starting
time.sleep(2)

# Type each item and press enter
for item in items:
    pyautogui.typewrite(item)
    pyautogui.press('enter')
