<?php
/**
 * Widget Featured
 *
 * @package Rttk
 */
 
// register Travel_Agency_Featured_Widget widget
function travel_agency_register_featured_widget() {
    register_widget( 'Travel_Agency_Featured_Widget' );
}
add_action( 'widgets_init', 'travel_agency_register_featured_widget' );
 
 /**
 * Adds Travel_Agency_Featured_Widget widget.
 */
class Travel_Agency_Featured_Widget extends WP_Widget {

	/**
	 * Register widget with WordPress.
	 */
	function __construct() {
        parent::__construct(
			'travel_agency_featured_widget', // Base ID
			__( 'Travel Agency: Featured Widget', 'travel-agency-companion' ), // Name
			array( 'description' => __( 'A Featured Widget', 'travel-agency-companion' ), ) // Args
		);
	}

	/**
	 * Front-end display of widget.
	 *
	 * @see WP_Widget::widget()
	 *
	 * @param array $args     Widget arguments.
	 * @param array $instance Saved values from database.
	 */
	public function widget( $args, $instance ) {
        $read_more      = !empty( $instance['readmore'] ) ? $instance['readmore'] : __( 'Read More', 'travel-agency-companion' );		     
        $show_thumbnail = !empty( $instance['show_thumbnail'] ) ? $instance['show_thumbnail'] : '' ;        
        $post_id        = !empty( $instance['post_list'] ) ? $instance['post_list'] : 1 ;

        $target = 'target="_self"';
        if( isset($instance['target']) && $instance['target']!='' )
        {
            $target = 'target="_blank"';
        }
        
        if( get_post_type( $post_id ) == 'post' ){
            $qry = new WP_Query( "p=$post_id" );
        }else{
            $qry = new WP_Query( "page_id=$post_id" );
        }
        if( $qry->have_posts() ){
            echo $args['before_widget'];
            ob_start();
            while( $qry->have_posts() ){
                $qry->the_post();
                $title = get_the_title();
                if( $title ) echo $args['before_title'] . apply_filters( 'widget_title', $title, $instance, $this->id_base ) . $args['after_title']; 
            ?>
                <div class="widget-featured-holder">
                    <?php if( has_post_thumbnail() && $show_thumbnail ){ ?>                    
                    <div class="img-holder">
                        <a <?php echo $target;?> href="<?php the_permalink(); ?>">
                            <?php 
                            $featured_img_size = apply_filters( 'featured_img_size', 'full' );
                            the_post_thumbnail( $featured_img_size ); ?>
                        </a>
                    </div>    				
                    <?php } ?>
                    <div class="text-holder">
                        <?php the_excerpt(); 
                        if( isset( $read_more ) && $read_more!='' )
                        { ?>
                            <a <?php echo $target;?> href="<?php the_permalink();?>" class="readmore"><?php echo esc_html( $read_more );?></a>
                        <?php 
                        }
                        ?>
                    </div>
                </div>        
            <?php    
            }
            wp_reset_postdata();
            $html = ob_get_clean();
            echo apply_filters( 'ta_companion_featured_widget_filter', $html, $args, $instance );
            echo $args['after_widget'];   
        }
	}

	/**
	 * Back-end widget form.
	 *
	 * @see WP_Widget::form()
	 *
	 * @param array $instance Previously saved values from database.
	 */
	public function form( $instance ) {
		$postlist[0] = array(
    		'value' => 0,
    		'label' => __('--Choose--', 'travel-agency-companion'),
    	);
    	$arg = array( 'posts_per_page' => -1, 'post_type' => array( 'post', 'page' ) );
    	$posts = get_posts($arg); 
    	
        foreach( $posts as $p ){ 
    		$postlist[$p->ID] = array(
    			'value' => $p->ID,
    			'label' => $p->post_title
    		);
    	}
        
        $read_more      = !empty( $instance['readmore'] ) ? $instance['readmore'] : __( 'Read More', 'travel-agency-companion' );	      
        $show_thumbnail = !empty( $instance['show_thumbnail'] ) ? $instance['show_thumbnail'] : '' ;        
        $post_list      = !empty( $instance['post_list'] ) ? $instance['post_list'] : 1 ;
        $target         = ! empty( $instance['target'] ) ? $instance['target'] : '';
        ?>
		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'post_list' ) ); ?>"><?php esc_html_e( 'Posts', 'travel-agency-companion' ); ?></label>
            <select name="<?php echo esc_attr( $this->get_field_name( 'post_list' ) ); ?>" id="<?php echo esc_attr( $this->get_field_id( 'post_list' ) ); ?>" class="widefat">
				<?php
				foreach ( $postlist as $single_post ) { ?>
					<option value="<?php echo $single_post['value']; ?>" id="<?php echo esc_attr( $this->get_field_id( $single_post['label'] ) ); ?>" <?php selected( $single_post['value'], $post_list ); ?>><?php echo $single_post['label']; ?></option>
				<?php } ?>
			</select>
		</p>
        
        <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'readmore' ) ); ?>"><?php esc_html_e( 'Read More Text', 'travel-agency-companion' ); ?></label> 
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'readmore' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'readmore' ) ); ?>" type="text" value="<?php echo esc_attr( $read_more ); ?>" />
		</p>
       
        <p>
            <input id="<?php echo esc_attr( $this->get_field_id( 'show_thumbnail' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'show_thumbnail' ) ); ?>" type="checkbox" value="1" <?php checked( '1', $show_thumbnail ); ?>/>
            <label for="<?php echo esc_attr( $this->get_field_id( 'show_thumbnail' ) ); ?>"><?php esc_html_e( 'Show Post Thumbnail', 'travel-agency-companion' ); ?></label>
		</p>

        <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'target' ) ); ?>">
                <input class="checkbox" id="<?php echo esc_attr( $this->get_field_id( 'target' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'target' ) ); ?>" type="checkbox" value="1" <?php echo checked($target,1);?> />
                <?php esc_html_e( 'Open in New Tab', 'travel-agency-companion' ); ?> 
            </label>
        </p>
        
		<?php 
	}

	/**
	 * Sanitize widget form values as they are saved.
	 *
	 * @see WP_Widget::update()
	 *
	 * @param array $new_instance Values just sent to be saved.
	 * @param array $old_instance Previously saved values from database.
	 *
	 * @return array Updated safe values to be saved.
	 */
	public function update( $new_instance, $old_instance ) {
		$instance = array();
		
        $instance['readmore']       = ! empty( $new_instance['readmore'] ) ? sanitize_text_field( $new_instance['readmore'] ) : __( 'Read More', 'travel-agency-companion' );
        $instance['post_list']      = ! empty( $new_instance['post_list'] ) ? absint( $new_instance['post_list'] ) : 1;
        $instance['show_thumbnail'] = ! empty( $new_instance['show_thumbnail'] ) ? absint( $new_instance['show_thumbnail'] ) : '';
        $instance['target']         = ! empty( $new_instance['target'] ) ? esc_attr( $new_instance['target'] ) : '';
		return $instance;
	}

} // class Travel_Agency_Featured_Widget