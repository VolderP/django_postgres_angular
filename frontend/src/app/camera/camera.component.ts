import {Component} from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {
  resolution = [1440, 1080]
  framerate = 61
  framerate_unit = 'fps'
  pixel_size = 3.45
  pixel_size_unit = 'Micron'
  color = false
  optical_size = '1/29"'
  shutter_type = 'Global'
  synchronization = 'Hardware'
  lens_mount = 'S'


}
