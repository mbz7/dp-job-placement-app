class JobsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid,
                with: :render_unprocessable_entity_response
  
    def index
      render json: Job.all
    end
  
    def show
      job = find_job
      render json: job
    end
  
    # def create
    #   job = Candidate.create!(candidate_params)
    #   render json: comment, status: :created
    # end
  
    # def destroy
    #   comment = find_comment
    #   comment.destroy
    #   head :no_content
    # end
  
    private
  
    # def candidate_params
    #   params.permit(:job_id, :first_name, :last_name, :phone, :city_state)
    # end
  
    def find_job
      Job.find(params[:id])
    end
  
    def render_not_found_response
      render json: { error: 'Job not found' }, status: :not_found
    end
  
    def render_unprocessable_entity_response(exception)
      render json: {
               errors: exception.record.errors.full_messages,
             },
             status: :unprocessable_entity
    end
  end

