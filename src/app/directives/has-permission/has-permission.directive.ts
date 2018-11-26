import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

/**
 * Directive for hidding controls or showing controls, passing it the module and permission of the module, checking if it has the permission.
 * NOTE: The permissions get them of the localStorage automatically of the 'modules' key
 * 
 * @example
 * 
 * To use in any html or component tag like this:
 *  
 *  <div *anHasPermission="[ 'module', 'permission' ]">
 *    Content to show
 *  </div>
 * 
 * The directive receive a tuple, the first param is the module name and the second param is the permission inside of the module
 * Don't forget the asterisk in the directive (*), this it's necessary because is a structural directive
 */

@Directive({
  selector: '[anHasPermission]'
})
export class HasPermissionDirective {
  
  /**
   * 
   * @param templateRef 
   * @param viewContainer 
   * @param ls 
   */

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private ls: LocalStorageService
  ) {}

  /**
   * It receives a tuple with the module name and the permission name
   */

  @Input() set anHasPermission([ module, permission ]: [ string, string ]) {
    if (!module || !permission) return;

    const modules = this.ls.getModules();

    // check if the module exists and if the permission exists into of the module
    if (modules[ module ] &&  modules[ module ][ permission ])
      this.viewContainer.createEmbeddedView( this.templateRef );
    else
      this.viewContainer.clear();
  }

}
