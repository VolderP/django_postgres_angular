# image_processor/views.py
from django.shortcuts import render
from django.core.files.storage import FileSystemStorage


def process_image(request):
    if request.method == 'POST' and request.FILES['image']:
        uploaded_image = request.FILES['image']
        fs = FileSystemStorage()
        image_path = fs.save(uploaded_image.name, uploaded_image)
        image_url = fs.url(image_path)

        # Perform computer vision tasks using OpenCV or other libraries
        # (e.g., object recognition, image processing, etc.)
        # This is where you'd integrate your computer vision code.

        return render(request, 'image_processor/templates/processed_image.html', {'image_url': image_url})

    return render(request, 'image_processor/templates/upload_image.html')
